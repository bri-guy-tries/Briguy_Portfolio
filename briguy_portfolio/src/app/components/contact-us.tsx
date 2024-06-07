export default function contactUs(){
    return(
        <div className="w-full mx-auto max-w-screen-xl">
            <div className="contact-us flex flex-wrap justify-center">
              <h2 className="text-4xl w-full underline mb-4 text-center">Contact Us</h2>
              <p className="text-center mb-8">Orem ipsum</p>
            </div>
            <form className="flex flex-col">
              <input type="text" className="mb-4 p-4" placeholder="Name" />
              <input type="text" className="mb-4 p-4" placeholder="Email" />
              <textarea className="mb-4 p-4" placeholder="description"></textarea>
            </form>
            <button type="submit" value="submit" />
            </div>
    )
}