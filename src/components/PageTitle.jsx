const PageTitle = ({title, color}) => {
   return (
      <section className="page-title" style={{color: color}}>
         <h1><span>{ title }</span></h1>
      </section>
   )
}

export default PageTitle;