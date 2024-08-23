export async function sendSessionData(score: number) {
try{
    const response = await fetch('http://localhost:5173/api/game-session', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({score}),
    })

    if(response.ok){
        console.log('Data sent sucessfully')
    } else{
        console.error('Failed to send data')
    }

} catch(error){
    console.error('Error', error)
}


}
