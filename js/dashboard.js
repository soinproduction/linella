$(document).ready(function () {
    var ComponentsBootstrapSelect = function () {
        var handleBootstrapSelect = function () {
            $('.bs-select').selectpicker({
                iconBase: 'fa',
                tickIcon: 'fa-check',
                size: 10,
                dropupAuto: false
            });
        }
        return {
            //main function to initiate the module
            init: function () {
                handleBootstrapSelect();
            }
        };
    }();
    
    $('.mine_change_check').change(function () {
        toastr.info('Wait', 'Executing...');
        if ($(this).is(':checked')) {
            value = 1;
        } else {
            value = 0;
        }
        table = $(this).data('table');
        id = $(this).val();
        col = $(this).data('col');
        $.post('/cp/change_check/', {table: table, id: id, value: value, col : col}, function (data) {
            try {
                response = JSON.parse(data);
                if (response.status == 200) {
                    toastr.success('Ok!!!');
                } else {
                    toastr.error('Status: 500!!!');
                    throw new Error('status 500');
                }
            } catch (e) {
                toastr.error('Error!!');
                console.log(e);
            }
        });
    });

    $('.mine_change_check_firebase').change(function () {
        toastr.info('Wait', 'Executing...');
        if ($(this).is(':checked')) {
            value = 1;
        } else {
            value = 0;
        }
        table = $(this).data('table');
        id = $(this).val();
        col = $(this).data('col');
        $.post('/cp/change_check_firebase/', {table: table, id: id, value: value, col : col}, function (data) {
            try {
                response = JSON.parse(data);
                if (response.status == 200) {
                    toastr.success('Ok!!!');
                } else {
                    toastr.error('Status: 500!!!');
                    throw new Error('status 500');
                }
            } catch (e) {
                toastr.error('Error!!');
                console.log(e);
            }
        });
    });

    $('.mine_change_select').change(function () {
        table = $(this).data('table');
        id = $(this).data('id');
        value = $(this).find(':selected').val();
        col = $(this).data('col');
        $.post('/cp/change_select/', {table: table, id: id, value: value, col : col}, function (data) {
            try {
                response = JSON.parse(data);
                if (response.status == 200) {
                    toastr.success('Ok!!!');
                } else {
                    throw new Error('status 500');
                    toastr.error('Status: 500!!!');
                }
            } catch (e) {
                toastr.error('Error!!');
                console.log(e);
            }
        });
    });

    $(document).on('click', '#delete_related_product', function(event) {
        event.preventDefault();
        if (confirm('Вы уверены что хотите удалить?')) {
            var ref = $(this);
            var product_id = $(this).data('product');
            var related_id = $(this).data('related'); 
            $.post('/cp/products/delete_related_product/', {product_id: product_id, related_id: related_id}, function (data) {
                response = JSON.parse(data);
                console.log(response);
                try {
                    if (response.status == 200) {
                        ref.parents('tr').hide(300);
                    } else {
                        throw new Error('status 500');
                    }
                } catch (e) {
                    console.log(e);
                    alert('Во время удаления произошла ошибка');
                }
            })
        }
    });

    $('#add_related_product').on('click', function(event) {
        event.preventDefault();
        var ref = $(this);
        var related_id = $('#match').data('related');
        var product_id = $('#match').data('product');
        var text = $('#match').val();

        $.post('/cp/products/add_related_product/', {related_id: related_id, product_id: product_id}, function (data) {
            response = JSON.parse(data);

            try {
                if (response.status == 200) {
                    ref.parents('table').append(
                        '<tr>' +
                            '<td>'+text+'</td>' +
                            '<td width="100">' +
                                '<button id="delete_related_product" data-product="'+product_id+'" data-related="'+related_id+'" class="btn red"><i class="fa fa-trash-o"></i> Удалить</button>' +
                            '</td>' +
                        '</tr>'
                    );
                    $('#match').val('');
                } else {
                    throw new Error('status 500');
                }
            } catch (e) {
                console.log(e);
                alert('Произошла ошибка');
            }
        });

    });

    $('#match').on('keyup', function(){
        
        var match = $(this).val();

        if(match != '') {

            $.post('/cp/products/autocomplete/', {match: match}, function (data) {
                response = JSON.parse(data);

               console.log(response);
                try {
                    if (response.status == 200) {
                        $('.search_result').empty();
                        $.each(response.result, function (index, value) {
                            $('.search_result').append('<a class="result_a" id="'+value.id+'" href="/"><span class="title">'+ value.title+'</span></a><br>');

                        });
                        $('.search_result').show();

                    } else {
                        throw new Error('status 500');
                    }
                } catch (e) {
                    console.log(e);
                    alert('Произошла ошибка');
                }
            });
        
        } else {
            $('.search_result').hide(); 
        }
    });

    $(document).on('click', '.result_a', function(event) {
        
        var id = $(this).attr('id');
        var text = $(this).find('.title').text();
        
        $('#match').val('');
        $('#match').data('related', '');

        $('#match').val(text);
        $('#match').data('related', id);

        $('.search_result').hide(); 

        event.preventDefault();
    });

    $('.accordion-toggle').on('click', function (event) {
        var accordion_body = $(this).attr('href');
        var status = $(accordion_body).attr('aria-expanded');
        if (status == 'true') {
            $('a.accordion-toggle>i.fa').removeClass('fa-minus');
            $('a.accordion-toggle>i.fa').addClass('fa-plus');
        } else {
            $('a.accordion-toggle>i.fa').removeClass('fa-plus');
            $('a.accordion-toggle>i.fa').addClass('fa-minus');
        }
    });

    $('body').on('click', '.mine_delete_row', function (event) {
        if (!confirm('Вы уверены?')) {
            event.preventDefault();
        }
    });

    $('.mine_delete_photo').on('click', function (event) {
        event.preventDefault();
        var self = $(this);
        if (confirm('Вы точно уверены, что хотите удалить данную фотографию?')) {
            var id = self.attr('data-id');
            var table = self.attr('data-table');
            var column = self.attr('data-column');
            var path = self.attr('data-path');
            $.post('/cp/delete_photo/', {table: table, id: id, column:column, path:path}, function (data) {
                response = JSON.parse(data);
                try {
                    if (response.status == 200) {
                        self.closest('.mt-element-card').remove();
                    } else {
                        throw new Error('status 500');
                    }
                } catch (e) {
                    console.log(e);
                    alert('Во время удаления фотографии произошла ошибка');
                }
            })
        }
    });

    $('.mine_delete_img_row').on('click', function (event) {
        event.preventDefault();
        var self = $(this);
        if (confirm('Вы точно уверены, что хотите удалить данную фотографию?')) {
            var id = self.attr('data-id');
            var table = self.attr('data-table');
            $.post('/cp/delete_img_row/', {table: table, id: id}, function (data) {
                try {
                    response = JSON.parse(data);
                    if (response.status == 200) {
                        self.closest('.mt-element-card').remove();
                    } else {
                        throw new Error('status 500');
                    }
                } catch (e) {
                    console.log(e);
                    alert('Во время удаления фотографии произошла ошибка');
                }
            });
        }
    });

    $('.mine_clear_file').on('click', function (event) {
        event.preventDefault();
        var self = $(this);
        if (confirm('Вы точно уверены, что хотите удалить данный файл?')) {
            var id = self.attr('data-id');
            var table = self.attr('data-table');
            var lang = self.attr('data-lang');
            $.post('/cp/delete_file/', {table: table, lang: lang, id: id}, function (data) {
                try {
                    response = JSON.parse(data);
                    if (response.status == 200) {
                        self.closest('.mt-element-card').remove();
                    } else {
                        throw new Error('status 500');
                    }
                } catch (e) {
                    console.log(e);
                    alert('Во время удаления файла произошла ошибка');
                }
            });
        }
    });
    $('.mine_datepicker').datepicker({
        format: 'dd.mm.yyyy'
    });

    ComponentsBootstrapSelect.init();
    $('.multi_select').multiSelect({
        selectableHeader: "<input type='text' class='form-control' autocomplete='off' placeholder='Search'>",
        selectionHeader: "<input type='text' class='form-control' autocomplete='off' placeholder='Search'>",
        afterInit: function(ms){
          var that = this,
              $selectableSearch = that.$selectableUl.prev(),
              $selectionSearch = that.$selectionUl.prev(),
              selectableSearchString = '#'+that.$container.attr('id')+' .ms-elem-selectable:not(.ms-selected)',
              selectionSearchString = '#'+that.$container.attr('id')+' .ms-elem-selection.ms-selected';
      
          that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
          .on('keydown', function(e){
            if (e.which === 40){
              that.$selectableUl.focus();
              return false;
            }
          });
      
          that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
          .on('keydown', function(e){
            if (e.which == 40){
              that.$selectionUl.focus();
              return false;
            }
          });
        },
        afterSelect: function(){
          this.qs1.cache();
          this.qs2.cache();
        },
        afterDeselect: function(){
          this.qs1.cache();
          this.qs2.cache();
        }
      });
});