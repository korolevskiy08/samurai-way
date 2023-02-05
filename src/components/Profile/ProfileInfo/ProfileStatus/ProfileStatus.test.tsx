import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="It-incubator" updateStatus={() => {
        }}/>);
        const instance = component.getInstance()
        expect(instance?.props.status).toBe("It-incubator")
    })

    test("after creation should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="It-incubator" updateStatus={() => {
        }}/>);
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })

    test("after creation should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="It-incubator" updateStatus={() => {
        }}/>);
        const root = component.root
        let span = root.findByType("input")
        expect(span).toBeNull()
    })

    test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="It-incubator" updateStatus={() => {
        }}/>);
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe('It-incubator')
    })

    test("input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status="It-incubator" updateStatus={() => {
        }}/>);
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe('It-incubator')
    })

    // test("callback should be called", () => {
    //     const mockCallback = jest.fn()
    //     const component = create(<ProfileStatus status="It-incubator" updateStatus={mockCallback}/>);
    //     const instance = component.getInstance()
    //     instance.deaActivateEditMode()
    //     expect(mockCallback.mock.calls.length).toBe(1)
    // })
})
