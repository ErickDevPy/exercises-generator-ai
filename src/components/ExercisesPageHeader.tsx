import { ArrowBigLeft } from 'lucide-react';

export function ExercisesPageHeader({onGoPreviousPage}: {onGoPreviousPage: () => void}) {
    return (
        <div className="exercises-header">
            <div></div>
            <span className="header-title">Exercises</span>
            <button onClick={() => onGoPreviousPage()}>
                <ArrowBigLeft size={36} className='left-icon'/>
            </button>
        </div>
    )
}