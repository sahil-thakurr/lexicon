import { Link } from "react-router"
import ScoreCircle from "./ScoreCircle"
 const ResumeCard=({resume :{ id, feedback, jobTitle, companyName, imagePath }}:{resume:Resume})=>{
  return (
    <Link to={`/resume/${id}`} className="resume-card animate-in fade-in zoom-in-5 duration-1000">
      <div className="flex flex-col gap-2 w-full">
  <div className="flex justify-between items-center w-full px-0">
    <h2 className="text-lg font-bold text-black m-0">{companyName}</h2>
    <div className="w-[-10px] h-[-40px] flex-shrink-0">
      <ScoreCircle score={feedback.overallScore} />
    </div>
  </div>

  <h3 className="text-sm text-gray-600 px-0">{jobTitle}</h3>

  <div className="w-full aspect-square overflow-hidden rounded-xl">
    <img
      src={imagePath}
      alt="resume"
      className="w-full h-full object-cover object-top"
    />
  </div>
</div>

    </Link>
  )
 }

export default ResumeCard
