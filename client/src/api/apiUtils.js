
export const tokenHeader = () => {
    return !!sessionStorage.jwt ? ({
      "Authorization": `Bearer ${sessionStorage.jwt}`,
      "Content-Type": "application/json"
    }) : {"Content-Type": "application/json"}
  }

export function handleError(response){
  if (!response.ok) {
    console.log(response.statusText)
    throw Error(response.statusText);
  } 
  return response
}

export const loggedIn = () => {
    return !!sessionStorage.jwt
  }

export function parseResponse(response){
    return response.json().then(json => ({
      status: response.status,
      json
    })
  ) 
}