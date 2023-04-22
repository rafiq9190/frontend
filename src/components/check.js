
function doneTyping(input_search) {
    if (input_search.getAttribute('id') == 'search_tools_field') { searchLoading.classList.remove('show_search_loading'); input_search.classList.remove('show_search'); searched_results.innerHTML = ''; searched_results_container.classList.remove('d-none'); } else { document.querySelector('.all_tools_loading').classList.remove('show_search_loading'); document.querySelector('#searched_results_list').innerHTML = ''; document.querySelector('#all_tools_searched_results').classList.remove('d-none'); }
    if (isValidIP(input_search.value.trim())) {
        searched_results.innerHTML += `<li><a href="${base_url}ip/${input_search.value.trim()}" target="_blank"><i class='icon icon-ping-ip-online'></i>IP LOOKUP</a></li>`; if (document.querySelector('#searched_results_list'))
            document.querySelector('#searched_results_list').innerHTML += `<li><a href="${base_url}ip/${input_search.value.trim()}" target="_blank"><i class='icon icon-ping-ip-online'></i>IP LOOKUP</a></li>`; if (isIpv4Valid(input_search.value.trim())) { toolsMetaDataObj.data.filter(tools => tools.tags == 'ipv4' || tools.tags == 'ipv4,ipv6').map(tools => { if (input_search.getAttribute('id') === 'search_tools_field') { searched_results.innerHTML += `<li><a href="${tools.link}/${tools.query === true ? input_search.value.trim() : ''}" target="_blank"><i class='${tools.icon}'></i>${tools.title}</a></li>`; } else { document.querySelector('#searched_results_list').innerHTML += `<li><a href="${tools.link}/${tools.query === true ? input_search.value.trim() : ''}" target="_blank"><i class='${tools.icon}'></i>${tools.title}</a></li>` } }); } else { toolsMetaDataObj.data.filter(tools => tools.tags == 'ipv6' || tools.tags == 'ipv4,ipv6').map(tools => { if (input_search.getAttribute('id') === 'search_tools_field') { searched_results.innerHTML += `<li><a href="${tools.link}/${tools.query === true ? input_search.value.trim() : ''}" target="_blank"><i class='${tools.icon}'></i>${tools.title}</a></li>`; } else { document.querySelector('#searched_results_list').innerHTML += `<li><a href="${tools.link}/${tools.query === true ? input_search.value.trim() : ''}" target="_blank"><i class='${tools.icon}'></i>${tools.title}</a></li>`; } }); }
    } else if (searchTitles(input_search.value.trim())) {
        foundTitlesArray.map(tools => {
            tools.title = tools.title.replace(new RegExp('(' + input_search.value.trim() + ')', 'ig'), '<b>$1</b>'); if (input_search.getAttribute('id') == 'search_tools_field')
                searched_results.innerHTML += `<li><a href="${tools.link}" target="_blank"><i class='${tools.icon}'></i>${tools.title}</a></li>`; else
                document.querySelector('#searched_results_list').innerHTML += `<li><a href="${tools.link}" target="_blank"><i class='${tools.icon}'></i>${tools.title}</a></li>`;
        });
    } else if (searchDesc(input_search.value.trim())) {
        foundDescArray.map(tools => {
            if (input_search.getAttribute('id') == 'search_tools_field')
                searched_results.innerHTML += `<li><a href="${tools.link}" target="_blank"><i class='${tools.icon}'></i>${tools.title}</a></li>`; else
                document.querySelector('#searched_results_list').innerHTML += `<li><a href="${tools.link}" target="_blank"><i class='${tools.icon}'></i>${tools.title}</a></li>`;
        });
    } else {
        if (input_search.getAttribute('id') == 'search_tools_field')
            searched_results.innerHTML += `<li class="no_result">No Result Found</li>`; else
            document.querySelector('#searched_results_list').innerHTML += `<li class="no_result">No Result Found</li>`;
    }
}



let allPagesSearch = document.querySelector('#search_tools_field');
function NavigateThroughResultsOfHeaderSearchBar(event) {
    let allPagesSearchItemFocused = searched_results.querySelector('li[class="resultItemFocus"]');
    if (event.key === "Enter" && allPagesSearchItemFocused) {
        event.preventDefault();
        allPagesSearchItemFocused.querySelector('a').click();
        return false;
    }
    if (!allPagesSearchItemFocused) {
        preventKey = false;
        hideCursor = false;
    };
    let availableKeys = ["ArrowDown", "ArrowUp"];
    if (availableKeys.includes(event.key)) {
        if (event.key == "ArrowUp") {
            preventKey = true;
            hideCursor = true;
            if (!allPagesSearchItemFocused) {
                let LastChild = searched_results.lastChild;
                LastChild.classList.add('resultItemFocus');
                LastChild.scrollIntoView();
            } else {
                if (allPagesSearchItemFocused.previousSibling) {
                    let newSibling = allPagesSearchItemFocused.previousSibling;
                    newSibling.classList.add('resultItemFocus');
                    newSibling.scrollIntoView();
                    allPagesSearchItemFocused.classList.remove('resultItemFocus');
                }
                else {
                    allPagesSearchItemFocused.classList.remove('resultItemFocus');
                    hideCursor = false;
                }
            }
        };
        if (event.key == "ArrowDown") {
            preventKey = true;
            hideCursor = true;
            if (!allPagesSearchItemFocused) {
                let FirstChild = searched_results.firstChild;
                FirstChild.classList.add('resultItemFocus');
                FirstChild.scrollIntoView();
            } else {
                if (allPagesSearchItemFocused.nextSibling) {
                    allPagesSearchItemFocused.nextSibling.scrollIntoView()
                    allPagesSearchItemFocused.nextSibling.classList.add('resultItemFocus');
                    allPagesSearchItemFocused.classList.remove('resultItemFocus')
                } else {
                    allPagesSearchItemFocused.classList.remove('resultItemFocus');
                    hideCursor = false;
                }
            }
        }
    };
    if (preventKey)
        event.preventDefault();
    let classListOfAllPagesSearch = allPagesSearch.classList;
    if (hideCursor) {
        classListOfAllPagesSearch.remove('cursorShow');
        classListOfAllPagesSearch.add('cursorHide');
    }
    else {
        classListOfAllPagesSearch.remove('cursorHide');
        classListOfAllPagesSearch.add('cursorShow');
    }
};
allPagesSearch.addEventListener('keydown', NavigateThroughResultsOfHeaderSearchBar);
allPagesSearch.addEventListener('click', () => {
    let focused = searched_results.querySelector('li[class="resultItemFocus"]')
    if (focused) focused.classList.remove('resultItemFocus');
    allPagesSearch.classList.remove('cursorHide');
    allPagesSearch.classList.add('cursorShow');
});
let toolsPageSearch = document.querySelector('#tools_search_input');
let tools_searchbar_result = document.querySelector('#searched_results_list');
function navigationThroughResultOfToolSearchbar(event) {
    let toolsPageSearchItemFocused = tools_searchbar_result.querySelector('li[class="resultItemFocus"]');
    if (event.key === "Enter" && toolsPageSearchItemFocused) {
        event.preventDefault();
        toolsPageSearchItemFocused.querySelector('a').click();
        return false;
    }
    if (!toolsPageSearchItemFocused) {
        keyPrevent = false;
        cursorHide = false;
    }
    let availableKeys = ["ArrowDown", "ArrowUp"];
    if (availableKeys.includes(event.key)) {
        if (event.key == "ArrowUp") {
            keyPrevent = true; cursorHide = true; if (!toolsPageSearchItemFocused) { let tools_searched_lastChild = tools_searchbar_result.lastChild; tools_searched_lastChild.classList.add('resultItemFocus'); tools_searched_lastChild.scrollIntoView(false); } else {
                if (toolsPageSearchItemFocused.previousSibling) {
                    let newSibling = toolsPageSearchItemFocused.previousSibling;
                    newSibling.classList.add('resultItemFocus');
                    newSibling.scrollIntoView(false);
                    toolsPageSearchItemFocused.classList.remove('resultItemFocus');
                }
                else {
                    toolsPageSearchItemFocused.classList.remove('resultItemFocus');
                    cursorHide = false;
                }
            }
        };
        if (event.key == "ArrowDown") {
            keyPrevent = true; cursorHide = true; if (!toolsPageSearchItemFocused) {
                let tools_search_FirstChild = tools_searchbar_result.firstChild;
                tools_search_FirstChild.classList.add('resultItemFocus');
                tools_search_FirstChild.scrollIntoView(false)
            }
            else {
                if (toolsPageSearchItemFocused.nextSibling) {
                    toolsPageSearchItemFocused.nextSibling.scrollIntoView(false)
                    toolsPageSearchItemFocused.nextSibling.classList.add('resultItemFocus');
                    toolsPageSearchItemFocused.classList.remove('resultItemFocus')
                } else {
                    toolsPageSearchItemFocused.classList.remove('resultItemFocus');
                    cursorHide = false;
                }
            }
        }
    }
    if (keyPrevent)
        event.preventDefault();
    let classListOfToolsSearchPage = toolsPageSearch.classList
    if (cursorHide) {
        classListOfToolsSearchPage.remove('cursorShow');
        classListOfToolsSearchPage.add('cursorHide');
    }
    else {
        classListOfToolsSearchPage.remove('cursorHide');
        classListOfToolsSearchPage.add('cursorShow');
    }
}
