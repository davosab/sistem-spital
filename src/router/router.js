import {createRouter, createWebHashHistory} from 'vue-router'
import Patients from '../pages/Patients/Patients.vue'
import Invoices from '../pages/Invoices/Invoices.vue'
import Inventory from '../pages/Inventory/Inventory.vue'
import Appointments from '../pages/Appointments/Appointments.vue'
import Wards from '../pages/Wards/Wards.vue'
import AddPatientPage from '../pages/Patients/AddPatientPage.vue'
import AddAppointmentPage from '../pages/Appointments/AddAppointmentPage.vue'


const routes = [
    {path:'/', redirect:'/patients'},
    {path:'/patients', name:'patients', component: Patients},
    {path:'/invoices', name:'invoices', component: Invoices},
    {path:'/inventory', name:'inventory', component: Inventory},
    {path:'/appointments', name:'appointments', component: Appointments},
    {path:'/wards', name:'wards', component: Wards},
    {path:'/addPatient', name:'addPatient', component: AddPatientPage},
    {path:'/addAppointment', name:'addAppointment', component: AddAppointmentPage},

]

  const router = createRouter({
        history: createWebHashHistory('/SistemSpital/'),
        routes
    })

export default router