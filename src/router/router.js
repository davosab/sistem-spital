import {createRouter, createWebHashHistory} from 'vue-router'
import Patients from '../components/Patients.vue'
import Invoices from '../components/Invoices.vue'
import Inventory from '../components/Inventory.vue'
import Appointments from '../components/Appointments.vue'
import Wards from '../components/Wards.vue'


const routes = [
    {path:'/', redirect:'/patients'},
    {path:'/patients', name:'patients', component: Patients},
    {path:'/invoices', name:'invoices', component: Invoices},
    {path:'/inventory', name:'inventory', component: Inventory},
    {path:'/appointments', name:'appointments', component: Appointments},
    {path:'/wards', name:'wards', component: Wards},
]

  const router = createRouter({
        history: createWebHashHistory('/SistemSpital/'),
        routes
    })

export default router