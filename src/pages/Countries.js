import {useState, useEffect} from 'react';
import Card from '../Card';

function Countries() {

    const [countryList, setCountryList] = useState([])

    let url = 'https://restcountries.eu/rest/v2/all';
    let options = {
        /* timeDiff: '1',
        component:item => <Card imgSrc = {item.flag} name = {item.name}/>,
        log:true */
    };

    useEffect(()=>{

        //axios({url, ...options}).then(res => console.log('axios', res)); 

        /* fetch(url,options).then(result=>result.json().then(output=>{
        console.log('fetch',output, result)
        })); */

        //kyc(url, options).then(res => setCountryList(res));

        fetch(url, options).then(result => {
            console.log(result);
            result.json().then(output => {
                //console.log(output);
                //Code goes here...
                //TO-DO: check map below
                setCountryList(output.map(item=><Card 
                                                imgSrc = {item.flag} 
                                                name = {item.name}
                                                />
                ));
            })
        });
    }, []);

    return (
        <div className="App">
        <header className="App-header">
            {countryList}
        </header>
        </div>
    );
}

export default Countries;
