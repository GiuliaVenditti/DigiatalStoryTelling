#!pip install qwikidata
import pprint
import requests
from qwikidata.sparql  import return_sparql_query_results

pp = pprint.PrettyPrinter(indent=1)

def wikidata_reconciliation(query, q_class=None):
    print(query)
    """ query wd apis and print in a json file the results of reconciliation """
    for q in query:
        print(q)
        API_WD = "https://www.wikidata.org/w/api.php"
        params = {
            'action': 'wbsearchentities',
            'format': 'json',
            'language': 'en',
            'search': q # the query string
        }
        
        # query wd API    
        r = requests.get(API_WD, params = params).json() 
        pp.pprint(r) # the response
        
        # iterate over results (if there is any)
        if 'search' in r and len(r['search']) >= 1:
            # if specified, double check if the entity belongs to the class
            if q_class:
                qid= r['search'][0]['title']
                query_string = """ASK {wd:"""+qid+""" wdt:P31 wd:"""+q_class+""". }"""
                
                # query WD endpoint this time!
                res = return_sparql_query_results(query_string) 
                print("\n my string:", query, "\n the query to WD endpoint:", query_string, "\n the result:",res)
                
                if res["boolean"] == True: 
                    print( r['search'][0]['title'] , 'the class matches :)')
                else:
                    print( r['search'][0]['title'] , 'the class does not match :(')
            else:
                print( r['search'][0]['title'] , 'no class was given')
        else:
            print( 'no results matching the query string')


fotografi = ["Mads Nissen", "Antonio Faccilongo"]

wikidata_reconciliation(fotografi, "Q5") 
#passare lista fotografi unici