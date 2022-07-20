import { driver } from "./extractor";



chrome.tabs.onActivated.addListener(async (tab)=>{
    chrome.scripting?.executeScript({
        target: {
            tabId: tab.tabId
        },
        world: "MAIN",
        files: ["extractor.ts"]
    }).then((result)=>{
        console.log(result)
    }).catch((e)=>{
        console.log(e)
    })
})

