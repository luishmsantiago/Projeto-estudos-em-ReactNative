import { useDeviceOrientation } from '@react-native-community/hooks' 
import { useClipboard } from '@react-native-community/hooks' 
const orientation = useDeviceOrientation() 
 
console.log('is orientation portrait: ', orientation.portrait) 
console.log('is orientation landscape: ', orientation.landscape) 



// Inside the component 

const [data, setString] = useClipboard() 

<Text>{data}</Text> 

<Button title='Update Clipboard' onPress={() => setString('new clipboard data')}>Set Clipboard</Button> 