import Head from 'next/head';
import styles from 'styles/Home.module.css';
import Layout2 from 'components/layout2';
import { selectAuthState, setAuthState } from 'store/authSlice';

export default function Test() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  
  return pug`
    Layout2
      div(className="mx-5 my-5")
        Card(className="max-w-[100%]")
          CardContent
            Typography(sx=${{ fontSize: 14 }} color="text.secondary" gutterBottom) Word of the Day
            Typography(variant="h5" component="div") be{bull}nev {bull} o {bull}lent
            Typography(sx=${{ mb: 1.5 }} color="text.secondary") adjective
            Typography(variant="body2") well meaning and kindly. w
              br
          CardActions
            Button(size="small") Learn More
  `
}