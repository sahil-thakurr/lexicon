import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter"
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Lexicon" },
    { name: "descryption", content: "Refine Your Path to the Perfect Job" },
  ];
}

export default function Home() {
  const {auth} = usePuterStore();
  const navigate = useNavigate();
  useEffect(()=>{
     if(!auth.isAuthenticated) navigate('/auth?next=/');
  },[auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1 className=" animate-in fade-in zoom-in duration-1000 ">Real Time Resume & Review Monitoring</h1>
        <h2>Analyze Submissions & Unlock Smart Feedback</h2>
      </div>
      {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
      )}
    </section>
  </main>;
}
