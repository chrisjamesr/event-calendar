
export const tokenHeader = () => {
    return !!sessionStorage.jwt ? ({
      "Authorization": `Bearer ${sessionStorage.jwt}`,
      "Content-Type": "application/json"
    }) : {"Content-Type": "application/json"}
  }

export function handleError(response){
  if (!response.ok) {
    throw Error(response.statusText);
    console.log(response.statusText)
  } 
  return response
}

export const loggedIn = () => {
    return !!sessionStorage.jwt
  }