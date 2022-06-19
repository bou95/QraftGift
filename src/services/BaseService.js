export default class BaseService {
    static getToken() {
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTVjMzgzYTU5ZjM4NDhjOWU4NTE5YjQiLCJlbWFpbCI6ImFkbWluMUB0ZXN0LmNvbSIsIm5hbWUiOiJCb3V0aGFpbmEiLCJnZW5kZXIiOiJNYWxlIiwicm9sZSI6IkFkbWluIiwicG9pbnRzIjowLCJyZWdEYXRlIjoiVHVlIE9jdCAwNSAyMDIxIDExOjMwOjE0IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJkZWxldGVkIjpmYWxzZSwiX192IjowLCJpYXQiOjE2MzU0MjAxOTN9.aSGkBYYZJeInzLKAMbhkSX3nSgr1EJuccLWXEBEADZc'
    }
    static async contactUsFormSubmit(name,email,subject,body) {
        let object = {
            name: name,
            email: email,
            subject: subject,
            body: body
        }
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Authorization: `Bearer ${this.getToken()}`},
            body: JSON.stringify(object)
        };
        try {
            const response = await fetch('https://ogoul.com/api/sendEmail', requestOptions);
            const data = await response.json();
            console.log(data)
            return response
        } catch (e) {
            return e;
        }
    }
}
