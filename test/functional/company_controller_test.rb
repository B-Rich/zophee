require 'test_helper'

class CompanyControllerTest < ActionController::TestCase
  test "should get main" do
    get :main
    assert_response :success
  end

end
