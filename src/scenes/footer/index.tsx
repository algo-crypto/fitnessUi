import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-500">
        <div className=" p-5 mx-auto w-5/6 gap-16 md:flex" >
           <div className="mt-16 basis-1/2 md:mt-0">
              <img alt='logo' src={Logo}/>
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reprehenderit. Odio, fugit
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reprehenderit. Odio, fugit
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reprehenderit. Odio, fugit
              </p>
              <p>
               @ all right reserved
              </p>
           </div>

           <div className="mt-16 basis-1/4 md:mt-0">
             <h4 className="font-bold">Links</h4>
             <p className="my-5 "> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             <p className="my-5 "> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             <p className="my-5 "> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           </div>

           <div className="mt-16 basis-1/4 md:mt-0">
             <h4 className="font-bold">Contact Us</h4>
             <p className="my-5 "> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             <p className="my-5 "> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             <p>555-555-555</p>
           </div>
        </div>
    </footer>
  )
}

export default Footer