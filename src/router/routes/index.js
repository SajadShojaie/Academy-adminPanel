// ** Routes Imports
import EditProfile from './EditProfile'
import ControleMember from './ControleMember'
import ControleContent from './ControleContent'
import DashboardRoutes from './Dashboards'
import Login from './Login'
import Auth from "./Auth"
import Edit from "./Edit"

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...EditProfile,
  ...ControleMember,
  ...ControleContent,
  ...Login,
  ...Auth,
  ...Edit
]

export { DefaultRoute, TemplateTitle, Routes }
