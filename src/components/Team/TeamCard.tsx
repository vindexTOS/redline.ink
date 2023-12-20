import React, {FC} from 'react'
import "../Services/Services.scss"
import { TeamMember } from './Team'
type TeamCardProps = {
   member:TeamMember
}

const TeamCard:FC<TeamCardProps> = ({member})=> {
  return (
 <div className=" h-[750px]  min-w-[300px] max-w-[450px] boxShaddow  rounded-[20px] overflow-hidden  z-50 bg-gray-900/40 p-2  ">
      <img className="w-full h-[400px] rounded-[50%] object-cover  boxShaddow " src={member.photo} alt={member.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-200">{member.name}</div>
        <p className="text-gray-400 text-base">{member.title}</p>
        <p className="text-gray-400 text-sm">{member.subTitle}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block  boxShaddow bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {member.email}
        </span>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-400 text-base">Skills:</p>
        <div className="flex flex-wrap">
          {member.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block boxShaddow bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}


export default TeamCard