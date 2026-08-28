
interface SkeletonProps {
    count: number
    height: number
}

const Skeleton = ({ count, height }: SkeletonProps) => {


    return (
        <div className="w-full">
            <div className={`w-full h-${height} bg-gray-200 animate-pulse `}></div>
        </div>
    )
}


export default Skeleton