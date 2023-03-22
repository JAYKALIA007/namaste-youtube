import Button from "./Button"
const FilterButtonContainer = () => {
    const buttonNameList = ["All", "Gaming", "Gadgets", "Music", "KSI", "Comedy",
                            "FIFA", "Zayn", "Divine", "Live", "Gaming", "Gadgets",
                            "Music", "KSI", "Comedy", "FIFA", "Zayn", "Divine", "Live"
                        ]
    return(
        <div className="flex overflow-x-scroll" >
            {buttonNameList.map((button,index)=>{
                return(
                    <Button key={index} name={button}/>
                )
            })}
        </div>
    )
}

export default FilterButtonContainer