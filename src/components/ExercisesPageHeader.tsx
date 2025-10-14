import { ArrowBigLeft } from 'lucide-react';

export function ExercisesPageHeader() {
    return (
        <div className="exercises-header">
            <div></div>
            <span className="header-title">Exercises</span>
            <button>
                <ArrowBigLeft size={36} className='left-icon'/>
            </button>
        </div>
    )
}