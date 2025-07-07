'use client'
import Hero from "../(main)/_components/home/Hero";
import { UserCategories } from "../(main)/_components/home/UserCategories";
import { CallToAction } from "../(main)/_components/home/CallToAction";
import { TestimonialsSection } from "../(main)/_components/home/TestimonialsSection";
import { FeaturedJobs } from "../(main)/_components/home/FeaturedJobs";
import { SkillDevelopment } from "../(main)/_components/home/SkillDevelopment";
import { CareerPathways } from "../(main)/_components/home/CareerPathways";
import { mockJobs,mockLearningResources,mockCareerPaths } from "./data/mockData";

export default function Main() {
    return(
        <>
          <div className="">
            <Hero/>
            <UserCategories/>
            <FeaturedJobs jobs={mockJobs} />
            <SkillDevelopment resources={mockLearningResources} />
      <CareerPathways careerPaths={mockCareerPaths} />
            <TestimonialsSection/>
            <CallToAction/>
          </div>
        </>
    )
}