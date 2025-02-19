function Container({imageUrl, value, text, color, textColor}) {
    return ( 
        <div style={{backgroundColor: color, color: textColor }} className="flex items-center justify-between gap-[90px] min-w-[200px] p-3 rounded-lg">
            <span className="flex items-center gap-2">
                <img src={imageUrl} alt="icon" />
                <h4 className="text-lg font-semibold">{text}</h4>
            </span>
            <span>{value}/100</span>
        </div>
     );
}

export default Container;