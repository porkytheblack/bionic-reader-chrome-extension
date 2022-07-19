import { get_sentences, split_sentence } from "./utils"




const extractor = (dom_node: HTMLElement | Document | ChildNode ) =>{
    console.log("Got here")
    if(dom_node.hasChildNodes()){
        dom_node.childNodes.forEach(extractor)
    }else if(!dom_node.hasChildNodes() && dom_node.nodeType === Node.TEXT_NODE ){
        get_sentences(dom_node.textContent).then((sentences)=>{
            Promise.all(
                sentences.map((val)=>split_sentence(val).then((vals: string[])=> val ))
            ).then((vals)=>{
                console.log(vals)
            }).catch((e)=>{
                console.log(e)
            })
        }).catch((e)=>{
            console.log(e)
        })
    }
}


export const driver = () =>{
    console.log("driver baby")
    extractor(document)
}