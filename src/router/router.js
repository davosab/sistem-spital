import {createRouter, createWebHashHistory} from 'vue-router'
import Patients from '../pages/Patients.vue'
import Invoices from '../pages/Invoices.vue'
import Inventory from '../pages/Inventory.vue'
import Appointments from '../pages/Appointments.vue'
import Wards from '../pages/Wards.vue'
import AddPatientPage from '../pages/AddPatientPage.vue'


const routes = [
    {path:'/', redirect:'/patients'},
    {path:'/patients', name:'patients', component: Patients},
    {path:'/invoices', name:'invoices', component: Invoices},
    {path:'/inventory', name:'inventory', component: Inventory},
    {path:'/appointments', name:'appointments', component: Appointments},
    {path:'/wards', name:'wards', component: Wards},
    {path:'/addPatient', name:'addPatient', component: AddPatientPage}
]

  const router = createRouter({
        history: createWebHashHistory('/SistemSpital/'),
        routes
    })

export default router