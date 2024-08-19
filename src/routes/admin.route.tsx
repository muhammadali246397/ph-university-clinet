
import Admindashboard from "../pages/admin/Admindashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFacalty from "../pages/admin/CreateFacalty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths2 = [
  {
    name:'dashboard',
    path:'dashboard',
    element:<Admindashboard/>
  },
  {
    name:'User managment',
    children:[
      {
        name:'Create admin',
        path:'create-admin',
        element:<CreateAdmin/>
      },
      {
        name:'Create Faculty',
        path:'create-facalty',
        element:<CreateFacalty/>
      },
      {
        name:'Create Student',
        path:'create-student',
        element:<CreateStudent/>
      }
    ]
  }
]

// export const allAdminRutes = adminPaths2.reduce((acc:Troute[],item) => {
// if(item.Path && item.element){
//   acc.push(
//     {
//       path:item.Path,
//       element:item.element
//     }
//   )
  
// }
// if(item.children){
//   item.children.forEach(child => {
//     acc.push({
//       path:child.path,
//       element:child.element
//     })
//   })
// }
// return acc;
// },[])

// export const sideBarItems = adminPaths2.reduce((acc:TsideBar[],items) => {
//   if(items.name && items.Path){
//     acc.push({
//       key:items.name,
//       label:<NavLink to={`/admin/${items.Path}`}>{items.name}</NavLink>
//     })
//   }
//   if(items.children){
//     acc.push({
//       key:items.name,
//       label:items.name,
//       children:items.children.map(child => ({
//         key:child.name,
//         label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//       }))
//     })
//   }
//   return acc
// },[])