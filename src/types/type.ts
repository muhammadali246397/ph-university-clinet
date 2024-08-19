import { ReactNode } from "react"

export type Troute ={
    path:string,
    element:ReactNode
  }
  
 export type TsideBar = {
    key:string,
    label:ReactNode,
    children?:TsideBar[]
  }
 export type TUserPath = {
    name:string,
    path?:string,
    element?:ReactNode,
    children?:TUserPath[]
}