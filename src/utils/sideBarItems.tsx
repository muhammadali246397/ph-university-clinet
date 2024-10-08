import { NavLink } from "react-router-dom"
import { TsideBar, TUserPath } from "../types/type"


export const sidebarItemGenaretor = (items:TUserPath[],role:string) => {
     const sidebarItem = items.reduce((acc:TsideBar[],items) => {
        if(items.name && items.path){
          acc.push({
            key:items.name,
            label:<NavLink to={`/${role}/${items.path}`}>{items.name}</NavLink>
          })
        }
        if(items.children){
          acc.push({
            key:items.name,
            label:items.name,
            children:items.children.map(child => ({
              key:child.name,
              label:<NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
            }))
          })
        }
        return acc
      },[])
      return sidebarItem
}