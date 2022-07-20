import { driver } from "./extractor";

let active = false;

const makeOrange = (color: string):void  =>{
    document.body.style.backgroundColor = color
}

chrome.action?.onClicked.addListener((tab)=>{
    // active = !active;
    // const color = active ? "orange" : "white";
    // chrome.scripting.executeScript({
    //     target: {
    //         tabId: tab.id ? tab.id : -1
    //     },
    //     func: makeOrange,
    //     args: [color]
    // }).then(()=>{
        
    // })
    console.log("This run")
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id ? tab.id : -1
        },
        files: ["extractor.ts"]
    }).then(()=>{
        console.log("Executed script")
    }).catch((e)=>{
        console.log(e)
    })
}) 



