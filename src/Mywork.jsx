import './mywork.css'

export function MyWork(){
    return(
        <>
        <main>
            <section className="mywork-header">
                <h2 className="mywork-header-title">My work</h2>
                <span>para ver mas ejemplos</span><a href="mailto:jmlorenzo1993@gmail.com">Email me</a>
            </section>

            <section className="mywork-first-project-container">
                <div className="mywork-first-project-container-info">
                    <h2 className="mywork-first-project-title">GLC Solutions</h2>
                    <li>UX/UI design, wordpress theme customization</li>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Mollitia architecto modi impedit distinctio.</p>
                    <button>visit website</button>
                </div>
                <div className='mywork-first-project-container-img-container'>
                    <img src="/src/assets/mywork1.jpg" alt="primer proyecto" className="mywork-first-project-img"/>
                </div>
            </section>

            <hr />

            <section className="mywork-second-project-container">
                <div className='mywork-second-project-container-img-container'>
                    <img src="/src/assets/mywork1.jpg" alt="primer proyecto" className="mywork-second-project-img"/>
                </div>
                <div className="mywork-second-project-container-info">
                    <h2 className="mywork-second-project-title">GLC Solutions</h2>
                    <li>UX/UI design, wordpress theme customization</li>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Mollitia architecto modi impedit distinctio.</p>
                    <button>visit website</button>
                </div>
            </section>

            <hr />

            <section className="mywork-first-project-container">
                <div className="mywork-first-project-container-info">
                    <h2 className="mywork-first-project-title">GLC Solutions</h2>
                    <li>UX/UI design, wordpress theme customization</li>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Mollitia architecto modi impedit distinctio.</p>
                    <button>visit website</button>
                </div>
                <div className='mywork-first-project-container-img-container'>
                    <img src="/src/assets/mywork1.jpg" alt="primer proyecto" className="mywork-first-project-img"/>
                </div>
            </section>
        </main>
        </>
    )
}