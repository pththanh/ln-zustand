"use client"
import useStore  from "../store/store"

export default function Home() {

   // and the action updateFirstName
   const firstName = useStore.use.firstName()
   const lastName = useStore.use.lastName()
   const updateFirstName = useStore.use.updateFirstName()
   const updateLastName = useStore.use.updatelastName()
 
   return (
     <main>
       <label>
         First name
         <input
           onChange={(e) => updateFirstName(e.currentTarget.value)}
           value={firstName}
         />
       </label>

       <label>
         Last name
         <input
           onChange={(e) => updateLastName(e.currentTarget.value)}
           value={lastName}
         />
       </label>
 
       <p>
         Hello, <strong>{firstName}{lastName}!</strong>
       </p>
     </main>
   )
}

