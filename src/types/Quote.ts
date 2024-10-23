import { FormEvent } from "react";

export interface Quote {
    id:string;
    text:string;
    upvotes:number;
    downvotes:number;
    e:FormEvent;
    userName:string
    authorName:string
    quoteText:string
}