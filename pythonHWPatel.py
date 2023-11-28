import requests

class CatFactsAPI:
    def __init__(self):
        self.api_url = "https://catfact.ninja/breeds"

    def get_nth_cat_breed(self, n):

        response = requests.get(self.api_url)
        
        if response.status_code == 200:
            data = response.json()

            # Get the nth cat breed
            if 0 <= n < len(data['data']):
                return data['data'][n]['breed']
            else:
                return f"Invalid value for n. It should be between 0 and {len(data['data']) - 1}."
        else:
            return f"Failed to retrieve data." 
# Example 
cat_facts_api = CatFactsAPI()
nth_cat_breed = cat_facts_api.get_nth_cat_breed(5)
print(f"The 5th cat breed is: {nth_cat_breed}")

