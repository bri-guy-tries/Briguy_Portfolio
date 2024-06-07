export default function latestProjects(){
    return(
        <div className="w-full mx-auto max-w-screen-xl">
            <h2 className="text-4xl underline mb-4 text-center">Projects</h2>
              
            <div className="flex pt-8 justify-between flex">
              <div className="project-card w-2/6 max-w-[400px]">
                <img src="https://placehold.co/400" / >
                <div className="project-hover-card">
                  <p>Orem ipsum</p>
                </div>
              </div>
              <div className="project-card w-2/6 max-w-[400px]">
                <img src="https://placehold.co/400" / >
                <div className="project-hover-card">
                  <p>Orem ipsum</p>
                </div>
              </div>
              <div className="project-card w-2/6 max-w-[400px]">
                <img src="https://placehold.co/400" / >
                <div className="project-hover-card">
                  <p>Orem ipsum</p>
                </div>
              </div>
            </div>
          </div>
    )
}