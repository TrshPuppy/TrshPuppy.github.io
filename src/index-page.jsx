import { Page } from "@nakedjsx/core/page";

Page.Create("en");
Page.AppendHead(<title> tiddies </title>);
Page.AppendBody(<p>wow</p>);
Page.Render();