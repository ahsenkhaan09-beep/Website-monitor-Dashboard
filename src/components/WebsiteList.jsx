
export default function WebsiteList () {
    const Website =[
        {name : 'google.com ', loadtime:  '210 ms'},
        {name : 'Netflix.com', loadtime : '510ms'},
    ];
    
    return(
         <div className="Website Monitor">
         <h3>Website Monitor</h3>
         {Website.map((site , index) => (
            <div className="Site-Card" key={index}>
                <span>{site,TimeRanges}</span>
               <span>{ site,TimeRanges}</span>
            </div>
       ))}
        </div>
    );
}