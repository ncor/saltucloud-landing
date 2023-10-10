export type LightbulbProps = {
    color: string
} & Pick<
    React.HTMLAttributes<HTMLDivElement>, 'className'
>;

export default function Lightbulb({ color, className }: LightbulbProps) {
    return <div className={
        `absolute w-[350px] h-[350px] bg-${color} rounded-full ${className} layer blur-[100px] opacity-[15%] -z-10`
    }/>
}
