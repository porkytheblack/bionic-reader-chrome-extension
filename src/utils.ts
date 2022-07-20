import { isArray, isEmpty, isString } from "lodash"

export const split_sentence = (sentence: any) : Promise<string[]> => new Promise((res, rej)=>{
    console.log("howdy don")
        if(!isString(sentence)) return rej({
            Error: "not a valid string"
        })

        var arr = sentence.trim().split(" ")
        if(isEmpty(arr)) return rej({
            Error: "Nothing was provided"
        })
        if(isArray(arr)){
            res(arr.filter((v)=>v !== ""))
        }
        if(isString(arr)){
            res(
                [
                    arr
                ]
            )
        }
        console.log(arr)
})

export const get_sentences = (paragraph: any) : Promise<string[]> => new Promise((res, rej)=>{
    console.log("Got here")
    if(!isString(paragraph)) return rej({
        Error: "Not a valid string"
    })
    var p = paragraph.trim()
    if(isEmpty(p)) return rej({
        Error: "An empty paragraph was provided"
    })
    if(!isString(p)) return rej({
        Error: "paragraph is not a string"
    })
    var sentences = p.split("\\.|:|=|-|_|\\+|\\/|>|<|\\|\\|")
    console.log(sentences)
    res(sentences)

})

