// ** Navigation sections imports
import EditProfile from './EditProfile'
import ControleMember from './ControleMember'
import dashboards from './dashboards'
import ControleContent from './ControleContent'

// ** Merge & Export
export default [...dashboards, ...EditProfile, ...ControleMember, ...ControleContent]
