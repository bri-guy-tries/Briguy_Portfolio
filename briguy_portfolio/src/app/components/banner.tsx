type bannerProp ={
    bannerData :{
    headline: string;
    tagLoop: number,
    tags: {
        tagName: string
    }[]
    }
    
    
} 
export default function banner(props:bannerProp){
    return (
        <div className="flex shrink-0 flex-col relative px-0 overflow-hidden">
                
                {[...Array(props.bannerData.tagLoop)].map((i, index) =>{
                        let direction;
                        if (index % 2 == 0){
                            direction = 'normal';
                        }else{
                            direction = 'reverse'
                        }
                        return(
                            <div style={{'--duration':'70951ms', '--direction':`${direction}`}} key={i}>
                                <div className="flex w-fit animate-loop">
                                    {props.bannerData.tags.map((tag) =>{
                                            return(
                                                <div className="m-1 text-white flex-nowrap w-auto whitespace-nowrap text-[12rem] leading-[11rem]" key={tag.tagName}>{tag.tagName}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })

                }
                <div className="w-full h-full bg-black absolute opacity-[.65] z-0"></div>
                <div className="m-4 absolute w-full m-w-[500px] top-[50%] ml-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-white">
                    <h1 className="text-8xl leadind-[10rem]">{props.bannerData.headline}</h1>
                </div>
                
            </div>
    )
}