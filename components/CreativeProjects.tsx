import React from 'react'
import { creativeProjects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const CreativeProjects = () => {
  return (
    <div className="py-20" id="creative-projects">
      <h1 className="heading">
            A small selection of {" "}
            <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {creativeProjects.map(({
        id,
        title,
        description,
        img,
        video,
        tags,
        link
        }) => (
            <div key={id} className="h-[32rem] sm:h-[41rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                <PinContainer title={link} href={link}> 
                  <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                      {img ? (
                          <img 
                              src={img} 
                              alt={title}
                              className="w-full h-full object-cover"
                          />
                      ) : (
                          <video 
                              autoPlay 
                              loop 
                              muted 
                              playsInline
                              className="w-full h-full object-cover"
                          >
                              <source src={video} type="video/mp4" />
                          </video>
                      )}
                    </div>
                    <h1 className="font-bold md:text-xl lg:text-2xl text-base line-clamp-1">
                        {title}
                    </h1>

                    <p className="font-light text-sm lg:text-xl lg:font-normal line-clamp-2">
                        {description}
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                        {tags.map((tag, index) => (
                          <div
                            key={tag}
                            className="border border-white/[0.2] rounded-full bg-black/50 px-3 py-1 text-xs lg:text-sm text-white/70"
                          >
                            {tag}
                          </div>
                        ))}
                        </div>

                        <div className="flex justify-center items-center">
                            <p className="flex text-xs md:text-sm lg:text-xl">Visit site</p>
                            <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                    </div>

                </PinContainer>
            </div>
        ))}
      </div>
    </div>
  )
}

export default CreativeProjects;