from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys

blaGroups = {'publish_LA_BLAv_BMAp_ant':'image3', 
          'publish_BLAalvsBLAp_ant_2':'image2', 
          'publish_BLAa_ant_2':'image1',
          'publish_LA_BLAv_BMAp_ret':'image6', 
          'publish_BLAalvsBLAp_ret':'image5', 
          'publish_BLAa_ret':'image4'}

# Test for gallery images are correctly loaded
def test_gallery_image(radio_value):
    image_group = ''
    for key in blaGroups:
        if blaGroups[key] == radio_value:
            image_group = key
            break

    # img tag
    print "Checking {} for {}".format(radio_value, image_group)
    for elem in driver.find_elements_by_css_selector('img'):
        image_url = elem.get_attribute('src')
        print image_url
        try:
            index = image_url.find(image_group)
            assert index > -1, "Expected positive value but {}".format(index)
        except AssertionError as err:
            print('Assertion error:', err)



options = Options()
options.set_headless(True)
driver = webdriver.Chrome(chrome_options=options)
driver.get("http://localhost:8080/amygdalar/")

# Span tags are bold
for elem in driver.find_elements_by_css_selector('#blaRadios span'):
    font_weight = elem.value_of_css_property('font-weight')
    try:
        expect = "700"
        print elem.text
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

driver.close()
