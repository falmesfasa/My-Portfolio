import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b 
    from-gray-800 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20 '>
            Experienced Full Stack Developer adept in all stages of advanced web development. 
            Knowledgeable in user interface, testing, and debugging processes. 
            Bringing forth expertise in design, installation, testing and maintenance of web systems. 
            Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, 
            including Java, ASP.NET, C#, IIS, Tomcat, and Microsoft SQL Server. 
            Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
            </p>
            <br />

            <p className='text-xl'>
            Experienced Software Developer adept in bringing forth expertise in design, 
            installation, testing and maintenance of software systems. Equipped with a 
            diverse and promising skill-set. Proficient in various platforms, languages, 
            and embedded systems. Experienced with the latest cutting edge development tools and procedures.  
            Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
            </p>
        </div>
    </div>
  )
}

export default About