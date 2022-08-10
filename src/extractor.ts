import { flatten, isEmpty, isUndefined } from "lodash"
import { getNodeElement, get_sentences, split_sentence, strongify_first } from "./utils"




const extractor = (dom_node: ChildNode ) =>{
    // console.log("Got here")
    if(dom_node.hasChildNodes()){
        dom_node.childNodes.forEach(extractor)
    }else if( isEmpty(dom_node.childNodes)  && ( dom_node.nodeType === Node.TEXT_NODE )){
        // console.log(dom_node.appendChild(document.createElement("p").textContent = " 😂 " as any))
        get_sentences(dom_node.textContent).then((sentences)=>{
             var _line = dom_node.textContent
             var _f  = _line.length > 3 ?  _line.charAt(0) : ""
            dom_node.textContent = _line.length > 3 ? _line.slice(2, _line.length - 1) : _line
            const p = document.createElement("strong")
            p.appendChild(document.createTextNode(_f))
            dom_node.insertBefore(p, dom_node)
            console.log(dom_node)
            console.log(dom_node.previousSibling.textContent)

            // Promise.all(
            //     sentences.map((val)=>split_sentence(val).then((vals: string[])=> vals ))
            // ).then((vals)=>{


                
            //     // var v = flatten(vals).map((val)=>strongify_first(val) )
                

            //     // console.log(textNode)
            //     console.log("Hello")
            // }).catch((e)=>{
            //     // console.log(e)
            // })
        }).catch((e)=>{
            // console.log(e)
        })
    }
}


export const driver = () =>{
    console.log("driver baby")
    extractor(document.getElementsByTagName("body")[0])
}



// driver()