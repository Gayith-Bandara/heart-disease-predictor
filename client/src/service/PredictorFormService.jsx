
export async function submit(data){
    
    const res = await fetch("http://localhost:3000/api/predict", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)
    });

    if(!res.ok){
        throw new Error("Failed to submit form");
    }

    return res.json();
}