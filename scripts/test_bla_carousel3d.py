from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys

blaGroups = {'publish_LA_BLAv_BMAp_ant':'image3', 
          'publish_BLAalvsBLAp_ant_2':'image2', 
          'publish_BLAa_ant_2':'image1',
          'publish_LA_BLAv_BMAp_ret':'image6', 
          'publish_BLAalvsBLAp_ret':'image5', 
          'publish_BLAa_ret':'image4'}

blaClassMap = {'blaam':'BLA.am', 'blaal':'BLA.al', 'blaac':'BLA.ac', 
               'blap':'BLAp', 'blav':'BLAv', 'la':'LA', 'bmap':'BMAp'}

blaColorMap = {'blaam':'rgba(82, 63, 195, 1)', 'blaal':'rgba(187, 63, 195, 1)', 
               'blaac':'rgba(3, 144, 102, 1)', 'blap':'rgba(63, 128, 193, 1)', 
               'blav':'rgba(43, 31, 115, 1)', 'la':'rgba(31, 82, 115, 1)', 
               'bmap':'rgba(108, 31, 115, 1)'}

# basic auth url (id:pass is given before url)
test_url = "http://amygdalar:amygdalar@localhost/amygdalar/"

# Test for gallery images are correctly loaded
def test_gallery_image(radio_value):
    print "Start the test for loaded gallery images on {}".format(radio_value)

    image_group = ''
    for key in blaGroups:
        if blaGroups[key] == radio_value:
            image_group = key
            break

    # img tag
    print "Checking {} for {}".format(radio_value, image_group)
    elems = driver.find_elements_by_class_name('carousel-3d-slide')
    for elem in elems:
        try:
            img = elem.find_element_by_css_selector('img')
            image_url = img.get_attribute('src')
            print image_url

            index = image_url.find(image_group)
            assert index > -1, "Expected positive value but {}".format(index)

            figcaption = elem.find_element_by_css_selector('figcaption')
            figcaption = figcaption.get_attribute('innerHTML')
            ara1 = int(image_url.split("/")[-1].split("_")[0].strip())
            ara2 = int(figcaption.split(' ')[-1].strip())
            print "{} {}".format(ara1,ara2)
            assert ara1 == ara2, "Expected {} and {} to be the same.".format(ara1,ara2)
            

        except AssertionError as err:
            print('Assertion error:', err)        



options = Options()
options.set_headless(True)
driver = webdriver.Chrome(chrome_options=options)
driver.get(test_url)

print "Start testing on {}".format(test_url)

# Span tags are bold
spans = driver.find_elements_by_css_selector('#blaRadios span')
try:
    assert spans != [], "Span tags are not available for testing.".format()
except AssertionError as err:
    print('Assertion error:', err)

for elem in spans:
    font_weight = elem.value_of_css_property('font-weight')
    try:
        expect = "700"
        print "Test on the font-weight of BLA menu for {}".format(elem.text)
        assert font_weight == expect, "Expected {} but {}".format(expect,font_weight)
    except AssertionError as err:
        print('Assertion error:', err)

# checked radio
for elem in driver.find_elements_by_class_name("funkyradio-default"):
    elem.click()
    radio_value = ''
    for elem2 in driver.find_elements_by_css_selector("input[type='radio']"):
        checked = elem2.get_attribute('checked')
        if checked == 'true':
            radio_value = elem2.get_attribute('value')
            break
    test_gallery_image(radio_value)

# Check BLA group names and colors
print "Start testing for BLA group names in menu."
for className in blaClassMap:
    try:
        print className        
        spans = driver.find_elements_by_class_name(className)
        for span in spans:
            text = span.text.rstrip(',')
            color = span.value_of_css_property('color')
            print "{} {}".format(text,color)

            expect = blaClassMap[className]
            assert text == expect, "Expected {} but {}".format(expect,text)

            expect = blaColorMap[className]
            assert color == expect, "Expected {} but {}".format(expect,color)

    except AssertionError as err:
        print('Assertion error:', err)

# Check the spacing of the BLA menu
print "Check the spacing of BLA menu."
try:
    blaRadio = driver.find_element_by_id("blaRadios")
    expect = "205px"
    top = blaRadio.value_of_css_property('top')    
    print top
    print expect
    assert top == expect, "Expected {} but {}".format(expect,top)    
except AssertionError as err:
    print('Assertion error:', err)

print "Check the spacing of the divs in BLA menu."
classNames = ['anterograde','retrograde']
for className in classNames:
    try:
        divs = driver.find_elements_by_class_name(className)
        for div in divs:
            print div.tag_name
            print div.text
            expect = "2.8px"
            space = div.value_of_css_property('margin-top')    
            assert space == expect, "Expected {} but {}".format(expect,space)    

            expect = "30px"
            space = div.value_of_css_property('padding-bottom')    
            assert space == expect, "Expected {} but {}".format(expect,space)            
    except AssertionError as err:
        print('Assertion error:', err)    

# Check the spacing of the navigator cursors
print "Check the spacing of the navigator cursors."
try:
    divs = driver.find_elements_by_class_name("carousel-3d-controls")
    for div in divs:
        print div.tag_name
        print div.text
        expect = "260px"
        top = div.value_of_css_property('top')    
        assert top == expect, "Expected {} but {}".format(expect,top)    
except AssertionError as err:
    print('Assertion error:', err)

# Test favicon and title
print "Check if the title and favicon is correct."
try:
    expect = 'Basolateral amygdala networks'
    assert driver.title == expect, "Expected {} but {}".format(expect,driver.title)

    favicon = driver.find_element_by_xpath('/html/head/link[1]')
    href = favicon.get_attribute('href')
    print href
    print driver.current_url
    expect = "/amygdalar/static/favicon.png"
    assert href == expect, "Expected {} but {}".format(expect,href)

except AssertionError as err:
    print('Assertion error:', err)


driver.close()
