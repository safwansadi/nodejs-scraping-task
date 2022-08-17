### 1) Retry stratagy :

<b>Ans: </b> Calling the ads fetch method recursively..

- first we need to write a method which will fetch ads links,  
  let the name the method, <b>fetchAdsLink(link)</b> it will return response or error.
- now <b>fetchAdsLink(link)</b> from another method named <b>fetchAds()</b> and store the <b>fetchAdsLink(link)</b> method's return value in a <b>temp</b> variable. Now if <b>temp=error</b>, the <b>fetchAds()</b> method will call itself
  for example:

```as
function fetchAds(){
     let temp = fetchAdsLink(link);
     if(temp == error){
        return fetchAds();
     }
     return temp;
}
```

### 2) Accessing more ads from this link than the limit allows (max 50 pages)?

<b>Ans:</b>  
keep track of how many pages have fetched upon the fetch call count.  
store the fetched data inside DB also need to cache the ads links from each page  
now, when the fetch call count = 50, the process will take break and after certain  
time of delay it will continue fetching the remaining links from the links cached array.

### 3) Other considerations?

<b>Ans: </b>  
The site currently blocks too many request together from a perticular ip. sending this much request at the same time may also make the site down this can lead to server down even it has load balancing system.  
Now, to avoid this kind of horrible sitution we can make queue based scraping system with the help of node js library like bullMQ. In this approach requests will be sent frequently after a certein time delay.
