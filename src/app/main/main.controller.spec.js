(function () {
  'use strict'

  describe('controllers', function () {
    var vm
    var $timeout
    var toastr

    beforeEach(module('shopping'))
    beforeEach(inject(function (_$controller_, _$timeout_, _webDevTec_, _toastr_) {
      spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}])
      spyOn(_toastr_, 'info').and.callThrough()

      vm = _$controller_('MainController')
      $timeout = _$timeout_
      toastr = _toastr_
    }))

    xit('should have a timestamp creation date', function () {
      expect(vm.creationDate).toEqual(jasmine.any(Number))
    })

    xit('should define animate class after delaying timeout ', function () {
      $timeout.flush()
      expect(vm.classAnimation).toEqual('rubberBand')
    })

    xit('should show a Toastr info and stop animation when invoke showToastr()', function () {
      vm.showToastr()
      expect(toastr.info).toHaveBeenCalled()
      expect(vm.classAnimation).toEqual('')
    })

    xit('should define more than 5 awesome things', function () {
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy()
      expect(vm.awesomeThings.length === 5).toBeTruthy()
    })
  })
})()
